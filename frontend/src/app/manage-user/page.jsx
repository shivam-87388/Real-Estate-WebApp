'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { IconTrash, IconPencil } from '@tabler/icons-react';

const ManageProperty = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all properties
  const fetchPropertyData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/property/getall'); 
      setPropertyData(res.data);
    } catch (error) {
      console.error('Failed to fetch properties:', error);
      toast.error('Failed to fetch properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  // Delete property
  const handleDelete = async (id) => {
    try {
      if (!window.confirm('Are you sure you want to delete this property?')) return;

      await axios.delete(`http://localhost:5000/property/delete/${id}`);
      toast.success('Property deleted successfully');
      fetchPropertyData(); // refresh after delete
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete property');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-extrabold text-4xl text-gray-800 mb-10">
          Manage Properties
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : propertyData.length === 0 ? (
          <p className="text-center text-gray-600">No properties found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="px-6 py-3 border-b">Title</th>
                  <th className="px-6 py-3 border-b">Type</th>
                  <th className="px-6 py-3 border-b">Location</th>
                  <th className="px-6 py-3 border-b">Area</th>
                  <th className="px-6 py-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {propertyData.map((property) => (
                  <tr key={property._id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 border-b">{property.title}</td>
                    <td className="px-6 py-3 border-b">{property.type}</td>
                    <td className="px-6 py-3 border-b">{property.location}</td>
                    <td className="px-6 py-3 border-b">{property.area} sq.ft</td>
                    <td className="px-6 py-3 border-b flex space-x-3">
                      {/* Edit Button */}
                      <Link
                        href={`/update-property/${property._id}`}
                        className="flex items-center px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm"
                      >
                        <IconPencil size={16} className="mr-1" /> Edit
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(property._id)}
                        className="flex items-center px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
                      >
                        <IconTrash size={16} className="mr-1" /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProperty;
