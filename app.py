# import os
# import cv2
# import numpy as np
# from pathlib import Path
# from tqdm import tqdm
# from tensorflow.keras.preprocessing.image import ImageDataGenerator

# # ----------------- Configuration -----------------
# INPUT_FOLDER = "Dry images"            # Folder with original images
# OUTPUT_FOLDER = "augmented_dry_skin"   # Folder to save augmented images
# IMAGE_SIZE = (128, 128)                # Resize dimensions
# NUM_AUGMENTED_IMAGES = 800             # Total augmented images to generate

# # ----------------- Step 1: Load and Preprocess Images -----------------
# def load_images(folder, image_size):
#     image_paths = list(Path(folder).glob("*.*"))
#     images = []
#     valid_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'}
    
#     for img_path in tqdm(image_paths, desc="Loading images"):
#         if img_path.suffix.lower() not in valid_extensions:
#             continue
            
#         img = cv2.imread(str(img_path))
#         if img is None:
#             print(f"Warning: Could not load {img_path}")
#             continue
            
#         img = cv2.resize(img, image_size)
#         img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
#         # Keep images in [0, 255] range for ImageDataGenerator
#         images.append(img.astype(np.uint8))
    
#     return np.array(images)

# # ----------------- Step 2: Set up Image Augmentation -----------------
# def augment_images(images, total_needed):
#     datagen = ImageDataGenerator(
#         rotation_range=20,
#         zoom_range=0.2,
#         width_shift_range=0.1,
#         height_shift_range=0.1,
#         horizontal_flip=True,
#         brightness_range=[0.8, 1.2],
#         fill_mode='nearest',
#         rescale=None  # Don't rescale since we're handling it manually
#     )

#     augmented = []
#     images_per_batch = min(len(images), 32)  # Process in smaller batches
    
#     # Calculate how many times we need to loop through the dataset
#     batches_needed = (total_needed + len(images) - 1) // len(images)
    
#     for batch_num in range(batches_needed):
#         if len(augmented) >= total_needed:
#             break
            
#         # Generate one batch of augmented images
#         batch_generator = datagen.flow(
#             images, 
#             batch_size=len(images), 
#             shuffle=True
#         )
        
#         batch = next(batch_generator)
        
#         # Ensure values are in correct range and convert to uint8
#         batch = np.clip(batch, 0, 255).astype(np.uint8)
        
#         for img in batch:
#             if len(augmented) >= total_needed:
#                 break
#             augmented.append(img)
    
#     return np.array(augmented[:total_needed])

# # ----------------- Step 3: Save Augmented Images -----------------
# def save_images(images, output_folder):
#     os.makedirs(output_folder, exist_ok=True)
    
#     for i, img in enumerate(tqdm(images, desc="Saving augmented images")):
#         # Ensure image is uint8 and in correct range
#         if img.dtype != np.uint8:
#             img = np.clip(img, 0, 255).astype(np.uint8)
        
#         # Convert RGB to BGR for OpenCV saving
#         img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
#         filename = os.path.join(output_folder, f"aug_{i:04d}.jpg")
        
#         # Save with high quality
#         success = cv2.imwrite(filename, img_bgr, [cv2.IMWRITE_JPEG_QUALITY, 95])
#         if not success:
#             print(f"Warning: Failed to save image {filename}")

# # ----------------- Debug function to check sample images -----------------
# def debug_sample_images(images, output_folder, num_samples=5):
#     """Save a few sample images to check if loading works correctly"""
#     debug_folder = os.path.join(output_folder, "debug_samples")
#     os.makedirs(debug_folder, exist_ok=True)
    
#     for i in range(min(num_samples, len(images))):
#         img = images[i]
#         if img.dtype != np.uint8:
#             img = np.clip(img, 0, 255).astype(np.uint8)
        
#         img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
#         filename = os.path.join(debug_folder, f"original_sample_{i}.jpg")
#         cv2.imwrite(filename, img_bgr, [cv2.IMWRITE_JPEG_QUALITY, 95])
    
#     print(f"Saved {min(num_samples, len(images))} debug samples to {debug_folder}")

# # ----------------- Run All Steps -----------------
# def main():
#     print("Loading original images...")
#     images = load_images(INPUT_FOLDER, IMAGE_SIZE)
    
#     if len(images) == 0:
#         print("No images found! Please check the input folder name and file formats.")
#         print("Supported formats: .jpg, .jpeg, .png, .bmp, .tiff, .tif")
#         return

#     print(f"Loaded {len(images)} images.")
#     print(f"Image shape: {images[0].shape}, dtype: {images[0].dtype}")
#     print(f"Value range: {images[0].min()} to {images[0].max()}")
    
#     # Save debug samples first
#     debug_sample_images(images, OUTPUT_FOLDER)
    
#     print("Starting augmentation...")
#     augmented = augment_images(images, NUM_AUGMENTED_IMAGES)
#     print(f"Generated {len(augmented)} augmented images.")
#     print(f"Augmented image shape: {augmented[0].shape}, dtype: {augmented[0].dtype}")
#     print(f"Augmented value range: {augmented[0].min()} to {augmented[0].max()}")

#     print("Saving augmented images...")
#     save_images(augmented, OUTPUT_FOLDER)
#     print(f"All done! Augmented images saved in '{OUTPUT_FOLDER}' folder.")
#     print("Check the 'debug_samples' subfolder to verify original images loaded correctly.")

# if __name__ == "__main__":
#     main()

import os
import cv2
import numpy as np
from pathlib import Path
from tqdm import tqdm
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import gc  # For garbage collection

# ----------------- Configuration -----------------
INPUT_FOLDER = "Dry images"            # Folder with original images
OUTPUT_FOLDER = "augmented_dry_skin"   # Folder to save augmented images
IMAGE_SIZE = (128, 128)                # Resize dimensions
NUM_AUGMENTED_IMAGES = 800             # Total augmented images to generate
BATCH_SIZE = 8                         # Process images in small batches to save memory

# ----------------- Step 1: Load and Preprocess Images -----------------
def load_images(folder, image_size):
    image_paths = list(Path(folder).glob("*.*"))
    images = []
    valid_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'}
    
    for img_path in tqdm(image_paths, desc="Loading images"):
        if img_path.suffix.lower() not in valid_extensions:
            continue
            
        img = cv2.imread(str(img_path))
        if img is None:
            print(f"Warning: Could not load {img_path}")
            continue
            
        img = cv2.resize(img, image_size)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        # Keep images in [0, 255] range for ImageDataGenerator
        images.append(img.astype(np.uint8))
    
    return np.array(images)

# ----------------- Step 2: Memory-Efficient Image Augmentation -----------------
def augment_images_memory_efficient(images, total_needed, batch_size=BATCH_SIZE):
    datagen = ImageDataGenerator(
        rotation_range=20,
        zoom_range=0.2,
        width_shift_range=0.1,
        height_shift_range=0.1,
        horizontal_flip=True,
        brightness_range=[0.8, 1.2],
        fill_mode='nearest'
    )

    augmented_count = 0
    output_folder = OUTPUT_FOLDER
    os.makedirs(output_folder, exist_ok=True)
    
    # Calculate how many rounds we need
    rounds_needed = (total_needed + len(images) - 1) // len(images)
    
    print(f"Will process {rounds_needed} rounds with {len(images)} images each")
    
    for round_num in range(rounds_needed):
        if augmented_count >= total_needed:
            break
            
        print(f"Processing round {round_num + 1}/{rounds_needed}")
        
        # Process images in small batches
        for i in range(0, len(images), batch_size):
            if augmented_count >= total_needed:
                break
                
            # Get current batch
            batch_end = min(i + batch_size, len(images))
            current_batch = images[i:batch_end]
            
            # Generate augmented batch
            batch_generator = datagen.flow(
                current_batch, 
                batch_size=len(current_batch), 
                shuffle=False
            )
            
            try:
                augmented_batch = next(batch_generator)
                
                # Ensure values are in correct range
                augmented_batch = np.clip(augmented_batch, 0, 255).astype(np.uint8)
                
                # Save images immediately to free memory
                for j, img in enumerate(augmented_batch):
                    if augmented_count >= total_needed:
                        break
                    
                    # Convert RGB to BGR for saving
                    img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
                    filename = os.path.join(output_folder, f"aug_{augmented_count:04d}.jpg")
                    
                    success = cv2.imwrite(filename, img_bgr, [cv2.IMWRITE_JPEG_QUALITY, 95])
                    if success:
                        augmented_count += 1
                    else:
                        print(f"Warning: Failed to save {filename}")
                
                # Force garbage collection to free memory
                del augmented_batch
                gc.collect()
                
            except Exception as e:
                print(f"Error processing batch {i}-{batch_end}: {e}")
                continue
    
    return augmented_count

# ----------------- Alternative: One-by-one processing for very low memory -----------------
def augment_images_one_by_one(images, total_needed):
    """Ultra memory-efficient: process one image at a time"""
    datagen = ImageDataGenerator(
        rotation_range=20,
        zoom_range=0.2,
        width_shift_range=0.1,
        height_shift_range=0.1,
        horizontal_flip=True,
        brightness_range=[0.8, 1.2],
        fill_mode='nearest'
    )

    output_folder = OUTPUT_FOLDER
    os.makedirs(output_folder, exist_ok=True)
    
    augmented_count = 0
    
    # Calculate how many times to loop through the dataset
    loops_needed = (total_needed + len(images) - 1) // len(images)
    
    with tqdm(total=total_needed, desc="Generating augmented images") as pbar:
        for loop in range(loops_needed):
            for i, original_img in enumerate(images):
                if augmented_count >= total_needed:
                    break
                
                # Process single image
                single_img = np.expand_dims(original_img, axis=0)  # Add batch dimension
                
                batch_generator = datagen.flow(single_img, batch_size=1, shuffle=False)
                augmented_single = next(batch_generator)
                
                # Remove batch dimension and ensure correct format
                aug_img = augmented_single[0]
                aug_img = np.clip(aug_img, 0, 255).astype(np.uint8)
                
                # Save immediately
                img_bgr = cv2.cvtColor(aug_img, cv2.COLOR_RGB2BGR)
                filename = os.path.join(output_folder, f"aug_{augmented_count:04d}.jpg")
                
                if cv2.imwrite(filename, img_bgr, [cv2.IMWRITE_JPEG_QUALITY, 95]):
                    augmented_count += 1
                    pbar.update(1)
                
                # Clean up
                del single_img, augmented_single, aug_img
                gc.collect()
                
                if augmented_count >= total_needed:
                    break
    
    return augmented_count

# ----------------- Debug function to check sample images -----------------
def debug_sample_images(images, output_folder, num_samples=5):
    """Save a few sample images to check if loading works correctly"""
    debug_folder = os.path.join(output_folder, "debug_samples")
    os.makedirs(debug_folder, exist_ok=True)
    
    for i in range(min(num_samples, len(images))):
        img = images[i]
        if img.dtype != np.uint8:
            img = np.clip(img, 0, 255).astype(np.uint8)
        
        img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        filename = os.path.join(debug_folder, f"original_sample_{i}.jpg")
        cv2.imwrite(filename, img_bgr, [cv2.IMWRITE_JPEG_QUALITY, 95])
    
    print(f"Saved {min(num_samples, len(images))} debug samples to {debug_folder}")

# ----------------- Run All Steps -----------------
def main():
    print("Loading original images...")
    images = load_images(INPUT_FOLDER, IMAGE_SIZE)
    
    if len(images) == 0:
        print("No images found! Please check the input folder name and file formats.")
        print("Supported formats: .jpg, .jpeg, .png, .bmp, .tiff, .tif")
        return

    print(f"Loaded {len(images)} images.")
    print(f"Image shape: {images[0].shape}, dtype: {images[0].dtype}")
    print(f"Value range: {images[0].min()} to {images[0].max()}")
    
    # Save debug samples first
    debug_sample_images(images, OUTPUT_FOLDER)
    
    print("Starting memory-efficient augmentation...")
    
    # Try batch processing first, fall back to one-by-one if needed
    try:
        augmented_count = augment_images_memory_efficient(images, NUM_AUGMENTED_IMAGES, BATCH_SIZE)
        print(f"Generated {augmented_count} augmented images using batch processing.")
    except Exception as e:
        print(f"Batch processing failed ({e}), trying one-by-one processing...")
        augmented_count = augment_images_one_by_one(images, NUM_AUGMENTED_IMAGES)
        print(f"Generated {augmented_count} augmented images using one-by-one processing.")
    
    print(f"All done! Augmented images saved in '{OUTPUT_FOLDER}' folder.")
    print("Check the 'debug_samples' subfolder to verify original images loaded correctly.")

if __name__ == "__main__":
    main()

