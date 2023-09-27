import React from "react";
import { contactData } from "../data";


const Contacts = () => {
  const { title, subtitle, form, label } = contactData;
 
  return (
    <section className="py-[40px] lg:py-[160px]">
      <div className="container mx-auto px-4 py-20">
        
        <h2 className="h2">{title}</h2>
        <h1 className="mb-8 lg:mb-16 leading-relaxed text-center">
          {subtitle}
        </h1>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block text-black text-sm link mb-2" for="nome">
                {label.name}
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={form.name}
                type="text"
              />
            </div>
            <div>
              <label className="block text-black text-sm link mb-2" for="email">
                {label.email}
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={form.email}
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-black text-sm link mb-2"
                for="telefone"
              >
                {label.number}
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={form.number}
                type="text"
              />
            </div>

            <div>
              <label
                className="block text-black text-sm link mb-2"
                for="assunto"
              >
                {label.subject}
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={form.subject}
                type="text"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm link mb-2"
              for="mensagem"
            >
              {label.message}
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                 focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={form.message}
              type="text"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button className="btn btn-sm btn-dark self-center mt-4">
              {form.btnText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
