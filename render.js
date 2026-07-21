// Renders CV_DATA (data.js) into the containers on index.html.
(function () {
  function entryList(items) {
    return items.map(function (item) {
      return (
        '<article class="entry">' +
          '<div class="entry-head">' +
            "<h3>" + item.company + "</h3>" +
            '<span class="dates">' + item.dates + "</span>" +
          "</div>" +
          '<p class="role">' + item.role + " &middot; " + item.location + "</p>" +
          "<ul>" +
            item.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") +
          "</ul>" +
        "</article>"
      );
    }).join("");
  }

  function educationList(items) {
    return items.map(function (item) {
      return (
        '<article class="entry">' +
          '<div class="entry-head">' +
            "<h3>" + item.school + "</h3>" +
            '<span class="dates">' + item.dates + "</span>" +
          "</div>" +
          '<p class="role">' + item.degree + " &middot; " + item.location + "</p>" +
        "</article>"
      );
    }).join("");
  }

  function render() {
    var el;

    if ((el = document.getElementById("hero-name"))) el.textContent = CV_DATA.name;
    if ((el = document.getElementById("hero-tagline"))) el.innerHTML = CV_DATA.tagline;
    if ((el = document.getElementById("hero-lede"))) el.textContent = CV_DATA.lede;

    if ((el = document.getElementById("experience-list"))) {
      el.innerHTML = entryList(CV_DATA.experience);
    }

    if ((el = document.getElementById("education-list"))) {
      el.innerHTML = educationList(CV_DATA.education);
    }

    if ((el = document.getElementById("certs-list"))) {
      el.innerHTML = "<strong>Certifications:</strong> " + CV_DATA.certifications.join(" &middot; ");
    }

    if ((el = document.getElementById("skills-technical"))) el.innerHTML = CV_DATA.skills.technical;
    if ((el = document.getElementById("skills-working"))) el.innerHTML = CV_DATA.skills.working;

    if ((el = document.getElementById("contact-email"))) {
      el.textContent = CV_DATA.contact.email;
      el.href = "mailto:" + CV_DATA.contact.email;
    }
    if ((el = document.getElementById("contact-github"))) el.href = CV_DATA.contact.github;
    if ((el = document.getElementById("contact-linkedin"))) el.href = CV_DATA.contact.linkedin;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
