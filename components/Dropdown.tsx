/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { OptionContextType } from "@customTypes/type";
import { OptionContext } from "contexts";
import { mutate } from "swr";

const filterOptions = [
    {
        label: "emailed",
        title: "Most Emailed",
        description: "The most emailed articles on NYTimes.com",
    },
    {
        label: "shared",
        title: "Most Shared",
        description: "The most shared articles on NYTimes.com",
    },
    {
        label: "viewed",
        title: "Most Viewed",
        description: "The most viewed articles on NYTimes.com",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
    const { setOption } = useContext(OptionContext) as OptionContextType;
    const [selected, setSelected] = useState(filterOptions[0]);

    const onChangeHandler = (item: any) => {
        setSelected(item);
        setOption(item.label);
    };

    return (
        <Listbox value={selected} onChange={onChangeHandler}>
            {({ open }) => (
                <>
                    <Listbox.Label className="sr-only">
                        Change filter option
                    </Listbox.Label>
                    <div className="relative ">
                        <div className="flex rounded-md divide-x divide-sky-600 justify-end">
                            <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-sky-600">
                                <div className="relative inline-flex items-center bg-sky-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                                    <p className="ml-2.5 text-sm font-medium">
                                        {selected.title}
                                    </p>
                                </div>
                                <Listbox.Button className="relative inline-flex items-center bg-sky-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-sky-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-sky-500">
                                    <span className="sr-only">
                                        Change filter option
                                    </span>
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-white"
                                        aria-hidden="true"
                                    />
                                </Listbox.Button>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {filterOptions.map((option) => (
                                    <Listbox.Option
                                        key={option.title}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "text-white bg-sky-500"
                                                    : "text-gray-900",
                                                "cursor-default select-none relative p-4 text-sm"
                                            )
                                        }
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <div className="flex flex-col">
                                                <div className="flex justify-between">
                                                    <p
                                                        className={
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal"
                                                        }
                                                    >
                                                        {option.title}
                                                    </p>
                                                    {selected ? (
                                                        <span
                                                            className={
                                                                active
                                                                    ? "text-white"
                                                                    : "text-sky-500"
                                                            }
                                                        ></span>
                                                    ) : null}
                                                </div>
                                                <p
                                                    className={classNames(
                                                        active
                                                            ? "text-indigo-200"
                                                            : "text-gray-500",
                                                        "mt-2"
                                                    )}
                                                >
                                                    {option.description}
                                                </p>
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default Dropdown;
