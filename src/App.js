import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import OTPInput from "react-otp-input";
export default function App() {
  const [otpSent, setOtpSent] = useState(false);
  return (
    <>
      {otpSent ? (
        <div className="flex flex-col gap-3 justify-center items-center w-full min-h-screen">
          <Card color="white" className="p-4 m-4 bg-slate-200 rounded-xl">
            <Typography className="font-roboto text-[38px] font-medium text-purple-800">
              OTP Verification
            </Typography>
            <Typography className="text-xs font-roboto font-normal my-1 text-gray-900">
              We have sent and OTP to +919889898989. Please enter the code
              received to verify.
            </Typography>
            <div className="justify-items-center items-center md:ml-8 mt-4">
              <OTPInput
                numInputs={4}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "78.54px",
                  height: "77.21px",
                  border: "1px solid #000",
                  marginRight: "8px",
                  borderRadius: "4px",

                }}
              />
            </div>

            <Button
              className="w-full h-[50px] mt-4 bg-purple-800 text-white text-[18px] font-bold rounded-lg"
              onClick={() => setOtpSent(!otpSent)}
            >
              Verify
            </Button>
          </Card>
        </div>
      ) : (
        <div className="flex flex-col gap-3 justify-center items-center w-full min-h-screen">
          <Card color="white" className="p-4 m-4 bg-slate-200 rounded-xl">
            <Typography className="font-roboto text-[38px] font-medium text-purple-800">
              Signin
            </Typography>
            <Typography className="text-xs font-roboto font-normal my-1 text-gray-900">
              Please enter your mobile number to login. We will send an OTP to
              verify your number.
            </Typography>
            <Input
              size="lg"
              autoFocus
              type="number"
              className="mt-4 rounded-md h-[40px]"
            />
            <Button
              className="w-full h-[50px] mt-4 bg-purple-800 text-white text-[18px] font-bold rounded-lg"
              onClick={() => setOtpSent(!otpSent)}
            >
              Sign In
            </Button>
          </Card>
        </div>
      )}
    </>
  );
}
