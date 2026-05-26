# My Understanding

[status: work in progress]

## Submission Links

**Loom Video (must be set to public — anyone with the link):**
[paste your Loom video URL here]

---

## Questions

Answer each question in your own words. There are no trick questions.

The goal is not a perfect answer — it is an honest one. Write as if you are explaining to a friend who has never used Express. Completing this will prepare you for your video walkthrough.

Do not copy from documentation, your code comments, or AI output. If you are unsure about something, write what you do understand and note where the gap is.

---

**1. What does each HTTP method in your API mean — GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?**

_Your answer:_

GET-ดึงมาดู, POST-สร้าง, PUT-แก้ไขทุกฟิลด์/PATCH-แกไขแบบปะลงไปแค่ที่อยากแก้, DELETE-ลบ / ,มันเป็นแค่รูปแบบคำขอให้เป็นมาตรฐาน RESTful แต่ควรทำ ลองไปเจอคนที่ส่งแต่ POST มามันจะงงตอนไล่โค้ดใน controller, คำขอไหนทำอะไรบอกกันตั้งแต่ตอนได้ req จบกว่า

---

**2. What is `express.json()` and what would happen if you left it out?**

_Your answer:_

๋JSON มันก็คือข้อความตอนส่งหากันบนอินเทอร์เนต, JavaScript เอาไปใช้มันน่าจะ undefined มันเลยต้องมีการแปลงเป็น JavaScript Object ก่อนถึงจะเอาไปใช้ได้ express.ก็เหมือนกันต้องการรูปแบบ JS Object ไปเก็บ Request, ดูจากการ app.use ก็น่าจะเป็น Middleware แต่แถมมาในตัว express เลย

---

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

_Your answer:_

- body คือเนื้อในจดหมาย แบบเป็น JS Object เลย ทั้งก้อนใหญ่ๆเลย จะใช้ต้องเปิดเข้าไปเอง
- params เห็นคำว่า params ให้มองไปดู address bar เลย, มันประมาณจ่าหน้าซองจดหมายน่ะ คล้าย body แต่มันไม่ได้เป็นก้อนทั้งหมด มันของตัวเดียวที่ถูกระบุไว้
- query เจอคำนี้ที่ไหน มันคือ "?" "ขอสอบถามหน่อย?" eg.(ขอสอบถามหน่อย? อยากได้ชื่อสินค้าทั้งหมดของตารางสินค้าที่มีราคาน้อยกว่า10บาทจะได้อะไรมั่ง?) ใน JS express req ก็ดูบน address bar เลย แต่มันค่อนข้างมีความเป็นเงื่อนไขเลยต่างจาก paramsที่เจาะจง eg.(?name=light ประมาณว่า เงื่อนไข มีคำว่า light ใน req.name ด้วยนะ)

---

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

_Your answer:_

200 ok, 201 created, 400 รับจบ user ผิดพลาด, 404 หาไม่เจอ เส้นทาง/หน้าเพจ หรือ สินค้าก็ได้ แล้วแต่กรณี, 500 ไปดูโค้ดฝั่ง server เลย internal server error.

---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

_Your answer:_

"ตัวคั่นกลาง" ระหว่างจุด a ไป b เราอยากทำอะไร นั่นแหละ ไปคั่นกลางแล้วซอยงานย่อยทำให้หน่อย eg. requestLogger() , มีรีเควสมา แปลงแล้ว ก่อนไปแยกเราท์ทำงานต่ออยากมี log ขึ้นโชว์ใน terminal ก่อนก็ ไปคั่นกลางแล้วทำหน้าที่ตัวเองซะ แล้วรีเควสก็ไปต่อ

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

_Your answer:_

ยกตัวอย่าง express.json() ถ้าวางหลังแยกเส้นทาง แปลว่า req ที่เอาไปทำงานต่อน่าจะเป็น ข้อความยาว แอปน่าจะพัง ถ้าดูโค้ด server.js มันก็เรียงลงมาเรื่อยๆ ก็น่าจะทำงานแบบนั้นนะ

---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

_Your answer:_

request มาก็ แปลงเป็น JS Object ก่อนเลย เจอ middleware ก็โชว์ log บนเทอร์มินัลหน่อย ต่อไปก็ แยกเส้นทาง จากไฟล์รวมเราท์ เลือกเราท์ที่เมธอดเป็น Post แล้วทำ ไปต่อทีไฟล์คอนโทรลเลอร์ เลือกทำอันที่ตรง ไม่กรอกชื่อกะราคา ก็status400เลยbad request ถ้ารีเควสดี ก็สร้าง(push ต่อเพิ่มก้อนออบเจคต์ลงอาร์เรย products) แล้วแจ้งหน่อยว่า status201

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

_Your answer:_

- create - post - POST /products
- read - get - GET /products, POST /products/:id
- update -put/patch - PUT /products/:id
- delete - delete - DELETE /products/:id

---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

_Your answer:_

!product ก็บอก หาสินค้าไม่เจอและส่งstatus404, หาเส้นทางไม่เจอก็แจ้งเลย ไม่มีหน้านี้ ส่งสถานะไปด้วย 404

---

**10. What was the hardest part of building this API and what did you do to get past it?**

_Your answer:_
ความจำในเรื่อง syntax ผมแย่มาก, algorithm ไม่ค่อยจะมี, มองเห็นแค่ logic กะ flow ว่าอยากได้อะไร ทำอะไรกะมัน แล้วรีเทิร์นอะไรไป ต้องเก็บก่อนไหมหรือใช้แล้วทิ้ง แล้วจะมีเครื่องมืออะไรมาช่วยได้บ้าง, ด้วยปัญหาและสิ่งที่เรามี ก็แก้ไขด้วย แยกส่วนปัญหาให้มันน่ากลัวน้อยลงก่อน แล้วก็สิ่งที่ simple ที่สุดอย่าง console.log กะคอมเมนท์นี่แหละ คอมเมนท์เป็นบล๊อกๆ psuedo code ที่คนเข้าใจนี่แหละ ปัญหาที่ต้องแก้มันมีอะไรมั่ง ก็จะเหลืออยู่แค่นั้น ที่เหลือก็ใช้ตัวช่วยเติมสิ่งที่เราขาดเลย Tool, Doc, AI แล้วแต่เวลาและทรัพยากรในตอนนั้น ๆ เลย
