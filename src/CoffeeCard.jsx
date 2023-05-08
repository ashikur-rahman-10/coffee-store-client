import React from "react";
import { FaEye, FaPenAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } =
        coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] max-w-[648px] flex items-center max-h-[300px]">
                <figure className="w-44 p-6 h-64">
                    <img src={photo} alt={name} />
                </figure>
                <div className="flex justify-between w-full pr-12 items-center">
                    <div className=" flex flex-col gap-3">
                        <h2>
                            <span className="text-xl font-semibold">
                                Name: {""}
                            </span>
                            {name}
                        </h2>
                        <p>
                            {" "}
                            <span className="text-xl font-semibold">
                                Supplier: {""}
                            </span>
                            {supplier}
                        </p>
                        <p>
                            {" "}
                            <span className="text-xl font-semibold">
                                Category: {""}
                            </span>
                            {category}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 text-white">
                        <Link>
                            <FaEye className="bg-[#D2B48C] rounded-md p-2 text-4xl"></FaEye>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <FaPenAlt className="bg-[#3C393B] rounded-md p-2 text-4xl"></FaPenAlt>
                        </Link>
                        <FaTrash
                            onClick={() => {
                                handleDelete(_id);
                            }}
                            className="bg-[#EA4744] rounded-md p-2 text-4xl"
                        ></FaTrash>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
