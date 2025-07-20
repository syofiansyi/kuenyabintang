import type { Testimonial } from "../types/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          {testimonial.avatar}
        </div>
        <div className="author-info">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
