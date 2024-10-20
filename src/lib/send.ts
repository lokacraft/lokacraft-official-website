"use server"
import { compileWelcomeTemplate, sendMail } from "./mail";

export const Send = async ({name,companyName,from,phone, subject, message, selectedCategory, customCategory}: {
      name: string,
      companyName: string,
      from: string,
      phone: string,
      subject: string,
      message: string,
      selectedCategory: string,
      customCategory: string,
}) => {
      await sendMail({
        to: process.env.SMTP_EMAIL as string,
        from: from,
        name: name,
        companyName: companyName,
        phone: phone,
        subject: name,
        selectedCategory: selectedCategory,
        customCategory: customCategory,
        body: compileWelcomeTemplate(name,companyName,from, process.env.SMTP_EMAIL as string, phone, subject, selectedCategory, customCategory, message),
      });
};