// Formspree endpoint provided by you
const FORM_ENDPOINT = "https://formspree.io/f/xvgyzqyj";

// Redirect target after successful submit
const THANK_YOU_PAGE = "/thank-you.html";
// If you prefer redirect immediately, set redirectDelayMs to 0.
// Otherwise this small delay gives a moment for the success message to appear.
const redirectDelayMs = 1000;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quote-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Honeypot check: if the hidden field has a value, treat as spam.
    const hp = form.querySelector('input[name="website"]');
    if (hp && hp.value.trim() !== "") {
      // Silent success (do not send) to avoid revealing honeypot to bots.
      status.textContent = "Thank you — your request has been received.";
      status.className = "form-status--success";
      form.reset();
      // Optionally redirect real visitors after a short delay
      setTimeout(() => { window.location.href = THANK_YOU_PAGE; }, redirectDelayMs);
      return;
    }

    status.textContent = "Sending...";
    status.className = "";

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
        status.className = "form-status--success";
        form.reset();
        // Redirect to a thank-you page after a short delay
        setTimeout(() => { window.location.href = THANK_YOU_PAGE; }, redirectDelayMs);
      } else {
        let data = {};
        try { data = await response.json(); } catch (_) {}
        const errorMessage = (data && data.error) ? data.error : "There was a problem sending your request. Please try again or email sales@wlgrabhire.com directly.";
        status.textContent = errorMessage;
        status.className = "form-status--error";
      }
    } catch (err) {
      status.textContent = "Unable to send request right now. Please try again later or email sales@wlgrabhire.com.";
      status.className = "form-status--error";
      console.error("Form submit error:", err);
    }
  });
});