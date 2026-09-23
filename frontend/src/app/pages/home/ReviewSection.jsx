import ReviewCard from "./ReviewCard";

const REVIEWS = [
  {
    name: "Rahim",
    rating: 5,
    review: "চালের মান খুব ভালো ছিল এবং ডেলিভারিও সময়মতো পেয়েছি।",
    productName: "Miniket Rice",
  },
  {
    name: "Karim",
    rating: 5,
    review: "নিজের মতো Combo বানাতে পেরে খুব সুবিধা হয়েছে, দামও যুক্তিসঙ্গত।",
    productName: "Custom Combo",
  },
  {
    name: "Sumaiya",
    rating: 4,
    review: "প্যাকেজিং ভালো ছিল এবং সব পণ্য তাজা পেয়েছি।",
    productName: "Family Grocery Combo",
  },
  {
    name: "Jahangir",
    rating: 5,
    review: "প্রতি মাসে এখান থেকেই বাজার করি, কখনো সমস্যা হয়নি।",
    productName: "Monthly Essentials Combo",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mb-8 flex items-center gap-2 md:mb-10">
          <span className="h-2 w-2 rounded-full bg-orange" />
          <h2 className="font-poppins text-2xl font-semibold text-dark-blue sm:text-3xl">
            আমাদের Customer Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
