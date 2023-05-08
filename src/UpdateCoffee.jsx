import React from "react";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpdateCoffee = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = {
            name,
            quantity,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        console.log(coffee);

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(coffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: "Do you want to continue",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            });
    };
    return (
        <div>
            <div className="m-10">
                <Link
                    className=" flex gap-2 items-center rounded-md w-fit px-2 py-1  hover:text-red-600 hover:border-red-700 text-xl font-medium "
                    to={"/"}
                >
                    {" "}
                    <span>Back to home</span>
                    <FaHome></FaHome>
                </Link>
            </div>
            <div className="w-[100%] min-h-[100vh] flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#F4F3F0] max-w-[878px] "
                >
                    <h1 className="text-4xl text-center mt-10">Add a Coffee</h1>
                    <p className="text-center text-[rgba(27, 26, 26, 0.7)] px-28 pt-5">
                        It is a long established fact that a reader will be
                        distraceted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <div className="mx-auto max-w-[645px] mx-28 my-10 ">
                        <div className="flex gap-6 w-[645px] mx-auto">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Coffee Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Type here"
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Quantity
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter quantity Name"
                                    name="quantity"
                                    required
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 w-[645px] mx-auto">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Supplier
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="supplier"
                                    placeholder="Coffee Supplier Name"
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Coffee taste
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Coffee Taste"
                                    required
                                    name="taste"
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 w-[645px] mx-auto">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Category
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Coffee Category"
                                    required
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Details
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Coffee Details"
                                    required
                                    name="details"
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 w-[645px] mx-auto">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">
                                        Photo
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter Photo URL"
                                    required
                                    className="input input-bordered input-accent w-[full]"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-6 py-2 bg-[#D2B48C] hover:bg-red-950 hover:text-white rounded-lg text-lg font-medium"
                        >
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
