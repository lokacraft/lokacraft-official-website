"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import ContactBg from "../../../../public/images/contact/contactbg.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { Mail, Send as SendIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send } from '@/lib/send';


function ContactUs() {
      const [name, setName] = useState<string>('');
      const [companyName, setCompanyName] = useState<string>('');
      const [from, setFrom] = useState<string>('');
      const [phone, setPhone] = useState<string>('');
      const [subject, setSubject] = useState<string>('');
      const [message, setMessage] = useState<string>('');
      const [selectedCategory, setSelectedCategory] = useState<string>(''); // New state for category
      const [customCategory, setCustomCategory] = useState<string>('');
      const [errors, setErrors] = useState<{ [key: string]: boolean }>({});// validasi

      const categories = [
        'Technology',
        'Consultant',
        'Culinary',
        'E-Commerce',
        'Educational',
        'Non Profit Org',
        'Fashion'
      ];
      const handleCategoryClick = (category: string) => {
            setSelectedCategory(category);
            if (category !== 'Other') {
                  setCustomCategory(''); // Kosongkan input custom jika kategori lain dipilih
            }
      };
      // validasi
      const validateForm = () => {
            const newErrors: { [key: string]: boolean } = {};
          
            if (!name) newErrors.name = true;
            if (!companyName) newErrors.companyName = true;
            if (!from) newErrors.email = true;
            if (!message) newErrors.message = true;
            if (!selectedCategory || (selectedCategory === 'Other' && !customCategory)) {
              newErrors.category = true;
            }
          
            setErrors(newErrors);
          
            return Object.keys(newErrors).length === 0; // Return true jika tidak ada error
      };
          

      return (
    <div className="w-full flex flex-col">
      <div className='w-full lg:h-screen flex flex-col lg:flex-row'>
            {/* left lg */}
            <div className="relative flex-[0.5]">
                  {/* image */}
                  <Image src={ContactBg} alt="test" width={1000} height={1000} className='w-full h-full object-cover' />
                  {/* content absolute */}
                  <div className='absolute w-full h-full top-0 left-0 flex items-center justify-start p-6'>
                        <div className='flex flex-col space-y-6 bg-blue'>
                              <span className="text-2xl font-thin"> Have Project In Mind?</span>
                              <h1 className="text-8xl font-extrabold">Lets Talk</h1>
                              <div className="flex items-center space-x-4">
                                    <Avatar>
                                          <AvatarImage src="https://github.com/shadcn.png" />
                                          <AvatarFallback>YS</AvatarFallback>
                                    </Avatar>

                                    <div className='flex flex-col space-y-0.5'>
                                    <h1 className="text-lg font-semibold">Yusuf Sulaiman</h1>
                                    <span className="text-sm font-medium">Account Executive</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            {/* right lg */}
            <form
            onSubmit={async (e) => {
                  e.preventDefault();
                  if (validateForm()) {
                        const categoryToSend = selectedCategory === 'Other' ? customCategory : selectedCategory;
                        handleCategoryClick(categoryToSend);
                        await Send({name,companyName,from,phone, subject, message, selectedCategory, customCategory });
                        setName('');
                        setCompanyName('');
                        setFrom('');
                        setPhone('');
                        setSubject('');
                        setMessage('');
                        setSelectedCategory('');
                        setCustomCategory('')
                        // set error
                        setErrors({});
                  }
                }}
            className='relative lg:flex-[0.5] flex flex-col p-6 lg:justify-between'>
                  {/* categories */}
                  <div className="w-full flex flex-col gap-y-6">
                        <Label htmlFor="Nama">Specify Your Industry {errors.category ? (<span className="font-light text-xs text-red-400">Mohon pilih category</span>) : (<></>)}</Label>
                        <div className="flex flex-wrap gap-2 w-full">
                              {categories.map((category) => (
                                    <Button
                                    type='button'
                                    key={category}
                                    className={`bg-[#121212] py-5 text-white rounded-lg hover:cursor-pointer cursor-pointer ${selectedCategory === category ? 'bg-white text-black' : ''}`} // Highlight selected category
                                    variant="outline"
                                    value={category}
                                    onClick={() => handleCategoryClick(category)}
                                    >
                                    {category}
                                    </Button>
                              ))}
                              <Button
                              type='button'
                              className={`bg-[#121212] py-5 text-white rounded-lg cursor-pointer ${selectedCategory === 'Other' ? 'bg-white text-black' : ''}`}
                              variant="outline"
                              onClick={() => handleCategoryClick('Other')}
                              >
                              Other
                              </Button>
                        </div>
                        {/* conditional jika other */}
                        {selectedCategory === 'Other' && (
                              <div className={`lg:w-full w-[45%] mt-1 grid gap-2.5 transition-opacity duration-500 ${selectedCategory === 'Other' ? 'opacity-100' : 'opacity-0'}`}>
                              <Label htmlFor="customCategory">Input Industri Anda</Label>
                              <Input
                                    autoFocus
                                    autoComplete="off"
                                    type="text"
                                    id="customCategory"
                                    placeholder="input jenis industri"
                                    className={`lg:w-[45%] ${errors.category ? 'border-red-500' : ''}`}
                                    value={customCategory}
                                    onChange={(e) => setCustomCategory(e.target.value)}
                              />
                              </div>
                        )}
                  </div>
                  {/* forms */}
                  <div className=" lg:flex-1 py-8 w-full flex flex-col space-y-6">
                        <div className="flex items-center space-x-3">
                              {/* Name */}
                              <div className="grid w-[45%] items-center gap-2.5">
                                    <Label htmlFor="Nama">Nama {errors.name ? (<span className="font-light text-xs text-red-400">Mohon isi field ini</span>) : (<></>)}</Label>
                                    <Input type="text" id="Nama" placeholder="Nama"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={errors.name ? 'border-red-500' : ''} />
                              </div>
                              {/* Company Name */}
                              <div className="grid w-[45%] items-center gap-2.5">
                                    <Label htmlFor="Nama">Nama Perusahaan {errors.companyName ? (<span className="font-light text-xs text-red-400">Mohon isi field ini</span>) : (<></>)}</Label>
                                    <Input type="text" id="Nama" placeholder="Nama Perusahaan"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className={errors.companyName ? 'border-red-500' : ''} />
                              </div>
                        </div>
                        {/* email */}
                        <div className="grid w-full max-w-[45%] items-center gap-2.5">
                              <Label htmlFor="email">Email {errors.email ? (<span className="font-light text-xs text-red-400">Mohon isi field ini</span>) : (<></>)}</Label>
                              <Input type="email" id="email" placeholder="Email"
                              value={from}
                              onChange={(e) => setFrom(e.target.value)}
                              className={errors.email ? 'border-red-500' : ''} />
                        </div>
                        {/* detail */}
                        <div className="grid w-[92%] gap-2.5">
                              <Label htmlFor="message">Your message {errors.message ? (<span className="font-light text-xs text-red-400">Mohon isi field ini</span>) : (<></>)}</Label>
                              <div className="w-full h-[100px] overflow-y-auto">
                                    <Textarea placeholder="Type your message here." id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={errors.message ? 'border-red-500' : ''} />
                              </div>
                        </div>
                  </div>
                  {/* submit */}
                  <div className='w-full flex'>
                        <Button type='submit' className='bg-white text-gray-800'>
                              <SendIcon className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                  </div>
            </form>
      </div>
    </div>
  )
}

export default ContactUs