---
layout: page.vto
title: Contact
alttitle: Have a question? Reach out.
url: /contact/
menu:
  visible: true
  order: 3
---

<form action="https://api.staticforms.xyz/submit" method="post" class="space-y-4 text-xl">
    <input type="text" name="name" placeholder="Your Name" class="border rounded p-2 w-full">
    <input type="text" name="email" placeholder="Your Email" class="border rounded p-2 w-full" />
    <textarea name="message" class="border rounded p-2 w-full h-40" placeholder="Your Message"></textarea>
    <input type="text" name="honeypot" style="display:none">
    <input type="hidden" name="accessKey" value="ef1f8ef0-0cd8-4fe1-95b8-30a4d8497b61">
    <input type="hidden" name="subject" value="Contact us form on Working Titles" />
    <input type="hidden" name="replyTo" value="frank@workingtitles.xyz">
    <input type="hidden" name="redirectTo" value="/message-sent">
    <input type="submit" value="Send" class="bg-blue-500 text-white rounded p-2 w-full cursor-pointer hover:bg-blue-600" />
</form>