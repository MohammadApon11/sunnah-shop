import useAuth from "@/hooks/useAuth";
import CreateJWT from "@/utils/CreateJWT";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = ({ from }) => {
  const { googleLogIn } = useAuth();
  const { replace } = useRouter();
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogIn();
      await CreateJWT({ email: user?.email });
      toast.dismiss(toastId);
      toast.success("User logged in Successfully");
      replace(from)
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  };
  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn btn-primary mt-5 mx-auto"
    >
      <FcGoogle className="text-3xl mr-3" /> Continue with google
    </button>
  );
};

export default GoogleLogin;
