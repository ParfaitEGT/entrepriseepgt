---
layout: layout.njk
title: Nos services
permalink: "/services/index.html"
data:
  services: content.services
---

<section class="services-section">
  <h2>{{ services.titre }}</h2>
  <p>{{ services.intro }}</p>

  <div class="services-container">
    {% for service in services.liste %}
      <div class="service-card">
        <h3>{{ service.nom }}</h3>
        <p>{{ service.description }}</p>
      </div>
    {% endfor %}
  </div>
</section>
