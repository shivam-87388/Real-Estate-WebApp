'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import {
  IconBath,
  IconBed,
  IconRulerMeasure,
  IconMapPin,
  IconCooker,
  IconTrash
} from '@tabler/icons-react';

const ListedProperty = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all properties
  const fetchPropertyData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/property/getall');
      setPropertyData(res.data);
    } catch (error) {
      console.error('Failed to fetch property data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  const displayProperties = () => {
    if (loading) {
      return (
        <div className="col-span-full text-center text-gray-500 text-lg">
          Loading properties...
        </div>
      );
    }

    if (propertyData.length === 0) {
      return (
        <div className="col-span-full text-center text-gray-500 text-lg">
          No properties available at the moment.
        </div>
      );
    }

    return propertyData.map((property) => (
      <div
        key={property._id}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative"
      >

        {/* Property Image */}
        <Link href={'/view-property/' + property._id}>
          <div className="relative h-60 w-full overflow-hidden">
            <img
              src={property.images?.[0] || '/placeholder.jpg'}
              alt={property.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Property Details */}
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-4">
            <IconMapPin size={16} className="text-gray-400 mr-2" />
            <p className="line-clamp-1">{property.location}</p>
          </div>

          {/* Beds / Baths / Kitchen / Area (only for Flats and Apartments) */}
          {(property.type === 'Apartment' || property.type === 'Flat') && (
            <div className="flex items-center justify-between text-gray-700 font-medium mb-4">
              <div className="flex items-center">
                <IconBed size={18} className="mr-1" />{property.bedrooms || 'N/A'} Beds
              </div>
              <div className="flex items-center">
                <IconBath size={18} className="mr-1" />{property.bathrooms || 'N/A'} Baths
              </div>
              <div className="flex items-center">
                <IconCooker size={18} className="mr-1" />{property.kitchen || 'N/A'} Kitchen
              </div>
              <div className="flex items-center">
                <IconRulerMeasure size={18} className="mr-1" />{property.area} sq.ft
              </div>
            </div>
          )}

          {/* Area only for Plots / Land / Property */}
          {(property.type === 'Plot' || property.type === 'Property' || property.type === 'Land') && (
            <div className="flex items-center text-gray-700 font-medium mb-4">
              <IconRulerMeasure size={18} className="mr-1" />{property.area} sq.ft
            </div>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-extrabold text-4xl text-gray-800 mb-10">
          Available Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayProperties()}
        </div>
      </div>
    </div>
  );
};

export default ListedProperty;
