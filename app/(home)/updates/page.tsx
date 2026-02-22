import UpdatesList from "@/components/updates/UpdatesList";
import React from "react";

export default function UpdatesPage() {
  return (
    <div className="pt-24 pb-24">
      <h3 className="font-extrabold mb-6 text-center">UPDATES</h3>
      <h6 className="bg-accent rounded-xl p-12 flex items-center justify-center mb-12">
        We make sure to update NovalisAI library regularly to provide you with
        the best experience while designing and building your projects.
      </h6>
      <UpdatesList />
    </div>
  );
}
