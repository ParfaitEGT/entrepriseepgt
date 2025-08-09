---
layout: _includes/layout.njk
title: Contact
permalink: "/contact/index.html"
---

<section>
  <h1>{{ title }}</h1>
  <p>Vous pouvez nous contacter en remplissant le formulaire ci-dessous ou via nos coordonnées.</p>
  <form name="contact" method="POST" data-netlify="true" action="/contact-success/">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>Nom :<br /><input type="text" name="name" required /></label>
    </p>
    <p>
      <label>Email :<br /><input type="email" name="email" required /></label>
    </p>
    <p>
      <label>Message :<br /><textarea name="message" rows="5" required></textarea></label>
    </p>
    <p>
      <button type="submit">Envoyer</button>
    </p>
  </form>
</section>
