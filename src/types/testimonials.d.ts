export interface ITestimonials {
    id: number;
  review: string;
  rating: number;
  writtenDate: string;
  reviwer: {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    imageUrl: string;
  };
}
