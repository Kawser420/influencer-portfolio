import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to InfluencerGear</h1>
            <p className="py-6">
              Discover the best equipment for content creators. From cameras to
              lighting, we have everything you need to create amazing content.
            </p>
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product cards will be added here */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Headphones"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Premium Headphones</h3>
              <p>Crystal clear audio for your recordings</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Camera"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">4K Camera</h3>
              <p>Professional quality for your videos</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80"
                alt="Smartwatch"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Smart Watch</h3>
              <p>Track your fitness and stay connected</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-base-300 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p>"The best equipment I've ever used for my YouTube channel!"</p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p>Lifestyle Influencer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p>"Amazing quality and fast shipping. Highly recommended!"</p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p>Travel Vlogger</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <p>"The customer service is exceptional. They really care!"</p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Jessica Williams</h4>
                  <p>Beauty Influencer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
