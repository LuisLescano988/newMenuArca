import React from 'react';

const CourseItem = ({ description, index }) => (
  <div className="mb-12">
    <p className="text-2xl font-extralight leading-relaxed">
      {description}
    </p>
  </div>
);

const FooterNote = ({ text }) => (
  <p className="text-sm font-extralight text-gray-600 italic">
    {text}
  </p>
);

const Tasting = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#fef0e6] min-h-screen">
      <div className="space-y-8 mb-16">
        {tastingData.items.map((item, index) => (
          <CourseItem
            key={index}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>

      <div className="mt-16 space-y-2">
        {tastingData.footer.map((note, index) => (
          <FooterNote key={index} text={note} />
        ))}
      </div>
    </div>
  )
}

export default Tasting