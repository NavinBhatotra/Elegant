"use client"

import Image from 'next/image'
import chairSvg from '../../public/assets/chair.svg'
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Button, Checkbox, FormControl, InputLabel } from '@mui/material';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return <div className="grid grid-cols-1 space-y-6 lg:grid-cols-2">
        <div className="grid justify-center bg-[#F3F5F7]">
            <Image
                src={chairSvg}
                alt="Picture of the author"
                blurDataURL="data:..."
                placeholder="blur"
                className='h-screen'
            />
        </div>
        <div className="grid justify-center">
            <div className='flex flex-col gap-y-4 justify-center'>
                <div className='font-extrabold text-shadow-md text-3xl w-full'>Sign Up</div>
                <div className='text-[#6C7275]'>Already have an account? <span className='text-[#38CB89]'>Sign in</span> </div>
                <div className='flex flex-col space-y-4 w-full'>
                    <TextField id="standard-basic" label="Your Name" variant="standard" />
                    <TextField id="standard-basic" label="Username" variant="standard" />
                    <TextField id="standard-basic" label="Email address" variant="standard" />
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className='flex justify-center items-center -ml-3 text-shadow-md text-[#6C7275]'>
                    <Checkbox  {...label} />
                    <span> I agree with <span className='font-semibold text-[#141718]'> Privacy Policy </span> and <span className='font-semibold text-[#141718]'> Terms of Use</span> </span>
                </div>
                <div>
                    <Button className="bg-black hover:bg-black" variant="contained" size="medium" fullWidth>
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    </div>
}