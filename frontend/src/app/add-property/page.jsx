'use client'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const AddProperty = () => {
  // Validation Schema
  const propertySchema = Yup.object().shape({
    title: Yup.string().required("Property title is required"),
    type: Yup.string().required("Property type is required"),
    price: Yup.number().min(0, "Price must be positive").required("Price is required"),
    location: Yup.string().required("Location is required"),
    area: Yup.number().required("Area is required"),
    bedrooms: Yup.number().min(0, "Invalid value").nullable(),
    bathrooms: Yup.number().min(0, "Invalid value").nullable(),
    kitchen: Yup.number().min(0, "Invalid value").nullable(),
    description: Yup.string().required("Description is required"),
    images: Yup.mixed().required("At least one image is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      price: "",
      location: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      kitchen: "",
      description: "",
      images: [],
    },
    validationSchema: propertySchema,
    onSubmit: (values, { resetForm }) => {
      // prepare form data
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key === "images" && values.images) {
          Array.from(values.images).forEach((file) => {
            formData.append("images", file);
          });
        } else {
          formData.append(key, values[key]);
        }
      });

      axios.post("http://localhost:5000/property/add", values)
      .then((result) => {
        toast.success("Property added successfully"); // same style as signup
        resetForm();
        console.log("Server Response:", result.data);
      })
      .catch((error) => {
        toast.error("Something went wrong!"); // same style as signup
        console.error("Error:", error);
      });
    },
  });

  const uploadFile = (e) => {
        const file = e.target.files[0];
        console.log(file);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('cloud_name', 'ddsnnqpbv');
        formData.append('upload_preset', 'jomankare');

        axios.post('https://api.cloudinary.com/v1_1/ddsnnqpbv/image/upload', formData)
            .then((result) => {
                console.log(result.data);
                formik.setFieldValue('images', [...formik.values.images, result.data.url]);
                toast.success('Image Uploaded Successfully');
            }).catch((err) => {
                console.log(err);
                toast.error('Failed to Upload Image');
            });

    }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Add Your Property
      </h2>

      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="col-span-2">
          <label className="block text-gray-600 mb-2 font-medium">Property Title</label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. Luxury 3BHK Apartment"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-sm">{formik.errors.title}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Property Type</label>
          <select
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="Plot">Plot</option>
            <option value="Commercial">Commercial</option>
            <option value="Villa">Villa</option>
          </select>
          {formik.touched.type && formik.errors.type && (
            <p className="text-red-500 text-sm">{formik.errors.type}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. 4500000"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500 text-sm">{formik.errors.price}</p>
          )}
        </div>

        {/* Location */}
        <div className="col-span-2">
          <label className="block text-gray-600 mb-2 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. Noida, Sector 62"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
          {formik.touched.location && formik.errors.location && (
            <p className="text-red-500 text-sm">{formik.errors.location}</p>
          )}
        </div>

        {/* Area */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Area (sq. ft)</label>
          <input
            type="number"
            name="area"
            value={formik.values.area}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. 1500"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
          {formik.touched.area && formik.errors.area && (
            <p className="text-red-500 text-sm">{formik.errors.area}</p>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formik.values.bedrooms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. 3"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formik.values.bathrooms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. 2"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Kitchen */}
        <div>
          <label className="block text-gray-600 mb-2 font-medium">Kitchen</label>
          <input
            type="number"
            name="kitchen"
            value={formik.values.kitchen}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="e.g. 1"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Image Upload */}
        <div className="col-span-2">
          <label className="block text-gray-600 mb-2 font-medium">Upload Property Image</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={uploadFile}
            className="block w-full border border-black rounded-lg px-4 py-2 text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4 
              file:rounded-lg file:border-0 
              file:text-sm file:font-semibold
              file:bg-indigo-600 file:text-white
              hover:file:bg-indigo-700 
              file:cursor-pointer focus:ring-2 focus:ring-indigo-400"
          />
          {formik.touched.images && formik.errors.images && (
            <p className="text-red-500 text-sm">{formik.errors.images}</p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-gray-600 mb-2 font-medium">Description</label>
          <textarea
            rows="4"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Write something about your property..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm">{formik.errors.description}</p>
          )}
        </div>

        {/* Submit */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
