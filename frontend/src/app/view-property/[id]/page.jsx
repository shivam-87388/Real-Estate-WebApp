'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  IconBath,
  IconBed,
  IconRulerMeasure,
  IconMapPin,
  IconCooker
} from '@tabler/icons-react';

const ViewProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/property/getbyid/${id}`);
        setProperty(res.data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load property details');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading property details...</p>;
  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{property.title}</h2>

        {/* Property Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {property.images?.length > 0 ? (
            property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
            ))
          ) : (
            <img
              src="/placeholder.jpg"
              alt="Placeholder"
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Property Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center text-gray-600 mb-4">
            <IconMapPin size={18} className="mr-2 text-gray-400" />
            <span>{property.location}</span>
          </div>

          <p className="text-gray-700 mb-4">{property.description}</p>

          {(property.type === 'Apartment' || property.type === 'Flat') && (
            <div className="flex flex-wrap gap-4 text-gray-700 font-medium">
              <div className="flex items-center">
                <IconBed size={18} className="mr-1" />
                {property.bedrooms || 'N/A'} Beds
              </div>
              <div className="flex items-center">
                <IconBath size={18} className="mr-1" />
                {property.bathrooms || 'N/A'} Baths
              </div>
              <div className="flex items-center">
                <IconCooker size={18} className="mr-1" />
                {property.kitchen || 'N/A'} Kitchen
              </div>
              <div className="flex items-center">
                <IconRulerMeasure size={18} className="mr-1" />
                {property.area} sq.ft
              </div>
            </div>
          )}

          {(property.type === 'Plot' || property.type === 'Land' || property.type === 'Property') && (
            <div className="flex items-center text-gray-700 font-medium">
              <IconRulerMeasure size={18} className="mr-1" />
              {property.area} sq.ft
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
