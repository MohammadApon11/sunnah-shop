"use client";
import GoogleLogin from "@/components/GoogleLogin";
import useAuth from "@/hooks/useAuth";
import CreateJWT from "@/utils/CreateJWT";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupForm = () => {
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();
  const uploadImage = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image Uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) new Error("Couldn't upload image");
      const image = await res.json();
      toast.dismiss(toastId);
      toast.success("image uploaded successfully");
      setValue("image", image.data.url);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  };
  const { createUser, profileUpdate } = useAuth();
  const onSubmit = async (data) => {
    const { email, password, name, image } = data;
    const toastId = toast.loading("Loading...");
    try {
      const user = await createUser(email, password);
      await CreateJWT({ email });
      await profileUpdate({
        displayName: name,
        photoURL: image,
      });
      toast.dismiss(toastId);
      toast.success("User created successfully");
      replace(from);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label htmlFor="name" className="label label-text">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          className="input input-bordered"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label label-text">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="input input-bordered"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="password" className="label label-text">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="input input-bordered"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="confirmPassword" className="label label-text">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          name="confirmPassword"
          className="input input-bordered"
          autoComplete="new-password"
          {...register("confirmPassword", {
            required: true,
            minLength: 6,
            validate: (value) =>
              value === getValues("password") || "The passwords do not match.",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="photo" className="label label-text">
          Photo
        </label>
        <input
          type="file"
          id="photo"
          onChange={uploadImage}
          className="file-input file-input-bordered file-input-primary w-full"
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Sign Up
        </button>
      </div>
      <p className="mt-3">
        Already have an account?{" "}
        <Link className="text-blue-500 underline ml-1" href="/login">
          Login
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      <GoogleLogin from={from} />
    </form>
  );
};

export default SignupForm;
