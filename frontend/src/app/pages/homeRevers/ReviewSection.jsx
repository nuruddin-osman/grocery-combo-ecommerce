// components/home/ReviewSection.jsx
import ReviewCard from "./ReviewCard";

const REVIEWS = [
  {
    id: 1,
    name: "Rahim",
    rating: 5,
    review: "চালের মান খুব ভালো ছিল এবং ডেলিভারিও সময়মতো পেয়েছি।",
    product: "Miniket Rice",
  },
  {
    id: 2,
    name: "Fatema",
    rating: 5,
    review:
      "নিজের Combo তৈরি করতে পেরেছি, যা আমার খুব ভালো লেগেছে। দামও সাশ্রয়ী।",
    product: "Custom Combo",
  },
  {
    id: 3,
    name: "Karim",
    rating: 4,
    review:
      "তেল ও ডালের কোয়ালিটি ভালো। ক্যাশ অন ডেলিভারি সুবিধা থাকায় ভরসা পাই।",
    product: "Monthly Essentials Combo",
  },
  {
    id: 4,
    name: "Nasrin",
    rating: 5,
    review: "অর্ডার ট্র্যাকিং সুবিধাটা দারুণ। সময়মতো সব পণ্য হাতে পেয়েছি।",
    product: "Family Grocery Combo",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="font-poppins text-2xl font-bold text-dark-blue sm:text-3xl">
            আমাদের Customer Reviews
          </h2>
          <p className="mx-auto mt-2 max-w-md font-inter text-sm text-dark-blue/60">
            আমাদের ক্রেতাদের অভিজ্ঞতা
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
