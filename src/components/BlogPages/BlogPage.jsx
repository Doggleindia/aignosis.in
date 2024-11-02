import React from "react";
import blogimg1 from "../../assets/blogimg1.png";
import blogimg2 from "../../assets/blogimg2.png";
import blogimg3 from "../../assets/blogimg3.png";
import blogimg4 from "../../assets/blogimg4.png";
import blogimg5 from "../../assets/blogimg5.png";
import Footer from "../Footer";

const BlogPage = () => {
  return (
    <div style={{ backgroundColor: "#1a0e28", color: "#fff", padding: "2rem" }}>
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "2rem",
        borderBottom: "1px solid #3a2344"
      }}>
        <div style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#ff8aff",
          fontFamily: "Arial, sans-serif"
        }}>Ai.gnosis</div>
        <button style={{
          backgroundColor: "#ff8aff",
          color: "#1a0e28",
          padding: "0.5rem 1.5rem",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Book an appointment
        </button>
      </header>

      {/* Main Content */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2 style={{
          color: "#ff8aff",
          marginBottom: "0.5rem",
          fontSize: "1.2rem",
          fontFamily: "Arial, sans-serif"
        }}>Blogs</h2>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          fontFamily: "Arial, sans-serif"
        }}>
          Insights & Resources for Autism Awareness
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "#cfc0e3",
          lineHeight: "1.6",
          maxWidth: "800px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif"
        }}>
          Welcome to our blog, a dedicated space for parents, caregivers, and educators seeking valuable information on autism and developmental support. Explore expert insights, practical tips, and inspiring stories designed to empower families on their journey. From understanding assessments to navigating therapy options, our articles aim to foster awareness and promote strategies for nurturing growth and happiness in children with autism. Join us as we share knowledge, resources, and a community of support!
        </p>
      </div>

      {/* Featured Posts - Section 1 */}
      <section style={{
        marginTop: "3rem",
        padding: "3rem",
        backgroundColor: "#271937",
        borderRadius: "8px",
        marginBottom: "3rem", // Increased vertical spacing
        width: "90%", // Set the desired width
        marginLeft: "auto", // Center the section
        marginRight: "auto" // Center the section
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Arial, sans-serif"
          }}>Featured Posts</h3>
          <a href="#" style={{
            color: "#ff8aff",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif"
          }}>More →</a>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          {[blogimg1, blogimg2].map((image, index) => (
            <div key={index} style={{
              backgroundColor: "#1a0e28",
              borderRadius: "8px",
              overflow: "hidden",
              width: "48%", // Set width for inner boxes
              display: "flex",
              flexDirection: "column"
            }}>
              <img
                src={image}
                alt={`Post ${index + 1}`}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "2rem" }}> {/* Increased padding */}
                <h4 style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  fontFamily: "Arial, sans-serif"
                }}>Post Title</h4>
                <p style={{
                  color: "#cfc0e3",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
                  fontFamily: "Arial, sans-serif"
                }}>Author • Category</p>
                <p style={{
                  fontSize: "0.9rem",
                  color: "#cfc0e3",
                  fontFamily: "Arial, sans-serif"
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis aute iure reprehenderit in voluptate.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts - Section 2 */}
      <section style={{
        marginTop: "3rem",
        padding: "2rem",
        backgroundColor: "#271937",
        borderRadius: "8px",
        width: "90%", // Set the desired width
        marginLeft: "auto", // Center the section
        marginRight: "auto",
        marginBottom: "8rem"
        
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Arial, sans-serif"
          }}>Category</h3>
          <a href="#" style={{
            color: "#ff8aff",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif"
          }}>More →</a>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          {/* Left Side: Single Post (blogimg3) */}
          <div style={{
            backgroundColor: "#1a0e28",
            borderRadius: "8px",
            overflow: "hidden",
            width: "48%", // Set width for the left box
            display: "flex",
            flexDirection: "column"
          }}>
            <img
              src={blogimg3}
              alt="Post 3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <div style={{ padding: "2rem" }}> {/* Increased padding */}
              <h4 style={{
                fontSize: "1.2rem",
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                fontFamily: "Arial, sans-serif"
              }}>Post Title</h4>
              <p style={{
                color: "#cfc0e3",
                fontSize: "0.9rem",
                marginBottom: "1rem",
                fontFamily: "Arial, sans-serif"
              }}>Author • Category</p>
              <p style={{
                fontSize: "0.9rem",
                color: "#cfc0e3",
                fontFamily: "Arial, sans-serif"
              }}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
              </p>
            </div>
          </div>

          {/* Right Side: Stacked Posts (blogimg4 and blogimg5) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "48%" }}>
            {[blogimg4, blogimg5].map((image, index) => (
              <div key={index} style={{
                backgroundColor: "#1a0e28",
                borderRadius: "8px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}>
                <img
                  src={image}
                  alt={`Post ${index + 4}`}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "2rem" }}> {/* Increased padding */}
                  <h4 style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    fontFamily: "Arial, sans-serif"
                  }}>Post Title</h4>
                  <p style={{
                    color: "#cfc0e3",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                    fontFamily: "Arial, sans-serif"
                  }}>Author • Category</p>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "#cfc0e3",
                    fontFamily: "Arial, sans-serif"
                  }}>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
    
    
  );
};

export default BlogPage;
