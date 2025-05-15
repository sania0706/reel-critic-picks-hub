
import { reviews as allReviews } from "@/data/movies";
import StarRating from "@/components/StarRating";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ReviewSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-3xl font-bold">Critics' Reviews</h2>
        <p className="mb-8 text-gray-400">What the experts are saying about these films</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allReviews.map(review => (
            <Card key={review.id} className="bg-movie-dark border-gray-800 animate-scale-in overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{review.author}</span>
                  <StarRating rating={review.rating} size={16} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{review.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
