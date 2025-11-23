// Formspree endpoint provided by you
const FORM_ENDPOINT = "https://formspree.io/f/xvgyzqyj";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quote-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    status.textContent = "Sending...";
    status.style.color = "";

    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (response.ok) {
        status.textContent = "Thank you — your request has been sent. We will reply to you shortly.";
        status.style.color = "green";
        form.reset();
      } else {
        let data = {};
        try { data = await response.json(); } catch (_) {}
        const errorMessage = (data && data.error) ? data.error : "There was a problem sending your request. Please try again or email sales@wlgrabhire.com directly.";
        status.textContent = errorMessage;
        status.style.color = "crimson";
      }
    } catch (err) {
      status.textContent = "Unable to send request right now. Please try again later or email sales@wlgrabhire.com.";
      status.style.color = "crimson";
      console.error("Form submit error:", err);
    }
  });
});
