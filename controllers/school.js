const geolib = require("geolib");
const School = require("../models/schoolSchema");

// API for add school
const addSchool= async (req, res) => {
    const { name, address, latitude, longitude } = req.body;
  
    // Create a new school document
    const school = new School({
      name,
      address,
      location: {
        type: "Point",
        coordinates: [longitude, latitude],
      },
    });
  
    try {
      await school.save();
      res.send("School added successfully");
    } catch (error) {
      res.status(500).send("Error adding school");
    }
  };
  // API endpoint to fetch schools sorted
const listSchool= async (req, res) => {
    const { latitude, longitude } = req.query;
  
    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required" });
    }
  
    try {
      const schools = await School.find();
  
      // Calculate distances and sort schools
      const sortedSchools = schools
        .map((school) => ({
          ...school.toObject(),
          distance:
            geolib.getDistance(
              {
                latitude: school.location.coordinates[1],
                longitude: school.location.coordinates[0],
              },
              { latitude: Number(latitude), longitude: Number(longitude) }
            ) / 1000, // Convert to kilometers
        }))
        .sort((a, b) => a.distance - b.distance);
  
      res.json(sortedSchools);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching schools" });
    }
  };

  
module.exports={ addSchool,listSchool}