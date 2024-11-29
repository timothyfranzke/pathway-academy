// scripts/generateGalleryJson.js
const fs = require('fs').promises;
const path = require('path');

async function generateGalleryJson() {
  try {
    // Define paths
    const galleryDir = path.join(__dirname, '..', 'public', 'assets', 'gallery');
    const outputPath = path.join(__dirname, '..', 'public', 'assets', 'gallery.json');

    // Ensure the gallery directory exists
    try {
      await fs.access(galleryDir);
    } catch (error) {
      console.error('Gallery directory does not exist. Creating it...');
      await fs.mkdir(galleryDir, { recursive: true });
    }

    // Read the directory
    const files = await fs.readdir(galleryDir);

    // Filter for image files and create image objects
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    const images = imageFiles.map((file, index) => {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      
      return {
        id: index + 1,
        filename: file,
        src: `/assets/gallery/${file}`,
        alt: name.replace(/[-_]/g, ' '), // Convert dashes and underscores to spaces
        title: name.replace(/[-_]/g, ' ')
      };
    });

    // Sort images by filename
    images.sort((a, b) => a.filename.localeCompare(b.filename));

    // Create gallery data object
    const galleryData = {
      lastUpdated: new Date().toISOString(),
      totalImages: images.length,
      images: images
    };

    // Write the JSON file
    await fs.writeFile(
      outputPath,
      JSON.stringify(galleryData, null, 2),
      'utf8'
    );

    console.log(`✔ Successfully generated gallery.json with ${images.length} images`);
    console.log(`📁 JSON file location: ${outputPath}`);

  } catch (error) {
    console.error('Error generating gallery.json:', error);
    process.exit(1);
  }
}

// Run the script
generateGalleryJson();