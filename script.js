
    function downloadResume() {
      // Replace with your actual resume path
      const resumeUrl = 'RESUME.pdf';
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.download = 'RESUME.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }


    // JS is not required here, but included if needed for dynamic features
    ("About page loaded.");

   
    // Add future JS features here
    console.log("Home page loaded.");

 
    function sendMessage() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
      } else {
        alert("Thank you for your message, " + name + "!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }
    }

    
    function showImage() {
      const img = document.getElementById("projectImage");
      img.style.display = "block";
    }