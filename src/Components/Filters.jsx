import React from "react";
import { useState } from "react";
import { CategoriesData } from "../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  //filters data

  const yearData = [
    { title: "Buscar por Año" },
    { title: "1950 - 1970" },
    { title: "1970 - 1990" },
    { title: "1990 - 2010" },
    { title: "2010 - 2023" },
  ];
  const timesData = [
    { title: "Buscar por Horas" },
    { title: "1 - 2 Horas" },
    { title: "2 - 3 Horas" },
    { title: "3 - 4 Horas" },
  ];
  const ratingData = [
    { title: "Buscar por Rating" },
    { title: "1 Estrella" },
    { title: "2 Estrellas" },
    { title: "3 Estrellas" },
    { title: "4 Estrellas" },
    { title: "5 Estrellas" },
  ];

  const [category, setCategory] = useState({ title: "Categorias" });
  const [year, setYear] = useState(yearData[0]);
  const [time, setTime] = useState(timesData[0]);
  const [rating, setRating] = useState(ratingData[0]);

  //filters data
  const filtersData = [
    {
      value: category,
      onchange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onchange: setYear,
      items: yearData,
    },
    {
      value: time,
      onchange: setTime,
      items: timesData,
    },
    {
      value: rating,
      onchange: setRating,
      items: ratingData,
    },
  ];

  console.log(filtersData)


  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {/* fiters data */}
      {filtersData.map((item, index) => (
        //listbox
        //onchange event
        <Listbox key={index} value={item.value} onChange={item.onchange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 text-white w-full bg-main rounded-lg py-4 pl-6 pr-10 text-xs">
              {/* item title */}
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center ">
                <SelectorIcon className="w-5 h-5" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* listbox option */}
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-white rounded-md shadow-lg max-h-60 py-1 text-base  overflow-auto sm:text-sm">
                {item.items.map((item, index) => (
                  <Listbox.Option
                    value={item}
                    key={index}
                    className={({ active }) =>
                      `relative cursor-pointer select-none  py-1 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                  >
                    {/* if selected option ? checkicon option active : else item title */}
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncated ${
                            selected ? "font-semibold " : "font-normal"
                          }`}
                        >
                          {item.title}
                        </span>

                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="h-3 w-3"  />
                          </span>
                        ) }
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
