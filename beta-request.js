(() => {
  const WORKER_ENDPOINT = "https://zenzo-beta-bot.samkomedved319.workers.dev/public/beta-requests";
  const form = document.querySelector("[data-beta-request-form]");

  if (!form) return;

  const submit = form.querySelector("button[type='submit']");
  const status = form.querySelector("[data-beta-request-status]");
  const startedAt = Date.now();

  const setStatus = (message, tone = "neutral") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.tone = tone;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = String(new FormData(form).get("name") || "").trim();
    const email = String(new FormData(form).get("email") || "").trim().toLowerCase();
    const website = String(new FormData(form).get("website") || "").trim();

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Enter your name and a valid email address so the Zenzo team can respond.", "error");
      return;
    }

    if (Date.now() - startedAt < 1_500) {
      setStatus("Please take a moment to review your request before sending it.", "error");
      return;
    }

    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    setStatus("Sending your request securely to the Zenzo staff team…");

    try {
      const response = await fetch(WORKER_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, website, startedAt }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.accepted) {
        throw new Error(typeof payload.error === "string" ? payload.error : "Your request could not be delivered. Please try again shortly.");
      }

      form.reset();
      setStatus("Request received. The Zenzo staff team will review it privately and contact selected applicants by email.", "success");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Your request could not be delivered. Please try again shortly.", "error");
    } finally {
      submit.disabled = false;
      submit.removeAttribute("aria-busy");
    }
  });
})();
