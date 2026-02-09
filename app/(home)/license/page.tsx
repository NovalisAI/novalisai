"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/use-media-query";
import { ITermOfUse } from "@/types";

export default function License() {
  const [selected, setSelected] = useState(0);
  const selectedPage = termsOfUse[selected];
  const { isSm } = useMediaQuery();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [selected]);

  return (
    <div className="flex flex-col sm:flex-row my-24 space-y-6 space-x-0 sm:space-x-6 sm:space-y-0">
      {isSm && (
        <ul className="flex-[3] lg:flex-[1] rounded-xl h-fit border sticky top-28 left-0">
          <li className="font-bold border-b py-2 px-6">Products</li>

          {["Library"].map((page, i) => (
            <li
              key={page}
              className={cn(
                "hover:bg-primary/90 hover:text-white rounded-full cursor-pointer py-2 px-6 my-2 mx-4",
                {
                  "bg-primary text-white": selected === i,
                }
              )}
              onClick={() => {
                setSelected(i);
              }}
            >
              Zappicon {page}
            </li>
          ))}
        </ul>
      )}
      <div className="flex-4 lg:flex-3">
        <h4 className="text-[#25314C] font-black mb-4">LICENSE</h4>
        <p className="heading-6 font-bold text-[#6B6B90]">
          Last Updated: June 1, 2025
        </p>
        {!isSm && (
          <ul className="border border-accent flex-1 rounded-xl h-fit mt-8">
            <li className="font-bold border-b py-2 px-6">Products</li>

            {["Library"].map((page, i) => (
              <li
                key={page}
                className={cn(
                  "heading-6",
                  "hover:bg-primary hover:text-white rounded-full cursor-pointer py-2 px-6 my-2 mx-4",
                  {
                    "bg-primary text-white": selected === i,
                  }
                )}
                onClick={() => {
                  setSelected(i);
                }}
              >
                Zappicon {page}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8">
          {selectedPage.content.map((item) => {
            return (
              <div className="mb-12" key={item.title}>
                <p className="mb-4 font-bold text-lg">{item.title}</p>
                {item?.description && (
                  <p className="heading-6 mb-4">{item.description}</p>
                )}
                {item?.list && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {item.list.map((listItem, index) => (
                      <li key={index} className="heading-6 leading-relaxed">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const termsOfUse: ITermOfUse[] = [
  {
    page: "Library",
    content: [
      {
        title: "",
        description:
          "This license outlines your rights and limitations for using the Zappicon library, including the free version. By using any part of the Zappicon, you agree to the terms outlined in this agreement.",
      },
      {
        title: "Permitted Uses",
        description:
          "We grant a license to use the Zappicon library under the following conditions:",
        list: [
          "Zappicon may be used in both commercial and personal projects.",
          "Any license you choose allows you to use the icons in unlimited projects and for unlimited clients.",
          "You are allowed to customize icon colors and sizes to match your project’s identity.",
          "Icons may be used in applications, websites, presentations, or printed projects.",
          "You may use the icons within client projects as long as you are not redistributing the icons.",
          "When working on a project for a client you may not deliver more than 400 icons to your client. Please note that each style counts as a separate icon.",
          "You may share the free version of the Zappicon in its complete and unmodified form, provided that credit is given to the official website.",
        ],
      },

      {
        title: "Prohibited Uses",
        list: [
          "Reselling or redistributing the Zappicon library in its original or modified form is prohibited.",
          "Using the Zappicon library to create new icon packs or to add to other icon libraries is not allowed.",
          'Removing the "Zappicon" brand identity is not permitted.',
          "Icons must not be used in illegal or offensive content.",
          'Redistribution or inclusion of icons in products sold to third parties is not allowed, whether in original or modified form, without obtaining the "Extended License".',
        ],
      },
      {
        title: "Extended License",
        description:
          "This license allows you to include icons in commercial tools intended for resale. Please contact us to discuss details and request this license.",
      },
      {
        title: "Refund Policy",
        description: (
          <>
            If you have not downloaded the files, you may request a refund
            within 7 days of purchase by contacting us at:{" "}
            <span className="font-semibold">support@zappicon.com</span>. We
            highly recommend reviewing the icon previews carefully, as we
            provide full previews and free icons for direct hands-on experience
            before purchase.
          </>
        ),
      },
      {
        title: "Intellectual Property",
        description:
          "All intellectual and commercial rights to the icons remain the exclusive property of Zappicon.",
      },
      {
        title: "Limitation of Liability",
        description:
          "We are not liable for any direct or indirect damages resulting from the use of the Zappicon.",
      },
      {
        title: "Changes to Terms",
        description:
          "We reserve the right to update this license at any time. If any changes are made, you will be notified via email.",
      },
      {
        title: "Contact Us",
        description: (
          <>
            For any inquiries, our team is available and ready to assist you:{" "}
            <span className="font-semibold">support@zappicon.com</span>
          </>
        ),
      },
    ],
  },
];
