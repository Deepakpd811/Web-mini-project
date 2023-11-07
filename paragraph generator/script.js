const para = [
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Totam consectetur veritatis magnam vero odit maxime dicta 
consequatur numquam error omnis voluptatum, mollitia doloremque 
inventore. Vitae distinctio temporibus maxime perspiciatis nisi!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
 praesentium! `,
  `Iure a rem officia totam accusamus quis repellat cumque
 hic eligendi blanditiis ea perspiciatis asperiores quidem soluta tempore
  suscipit, porro sunt! Debitis in beatae vero suscipit unde adipisci 
  magni animi harum vel. Obcaecati, odio? Vero iste obcaecati assumenda 
  iusto consequuntur eius voluptas. Quod iste pariatur quo facilis consequuntur,
   mollitia quaerat non minus magnam, nisi quae inventore quidem.`,
  `Iure a rem officia totam accusamus quis repellat cumque
 hic eligendi blanditiis ea perspiciatis asperiores quidem soluta tempore
  suscipit, porro sunt! Debitis in beatae vero suscipit unde adipisci 
  magni animi harum vel. Obcaecati, odio? Vero iste obcaecati assumenda 
  iusto consequuntur eius voluptas. Quod iste pariatur quo facilis consequuntur,
   mollitia quaerat non minus magnam, nisi quae inventore quidem.`,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Totam consectetur veritatis magnam vero odit maxime dicta 
consequatur numquam error omnis voluptatum, mollitia doloremque 
inventore. Vitae distinctio temporibus maxime perspiciatis nisi!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
 praesentium! `,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Totam consectetur veritatis magnam vero odit maxime dicta 
consequatur numquam error omnis voluptatum, mollitia doloremque 
inventore. Vitae distinctio temporibus maxime perspiciatis nisi!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
 praesentium! `,
  `Iure a rem officia totam accusamus quis repellat cumque
 hic eligendi blanditiis ea perspiciatis asperiores quidem soluta tempore
  suscipit, porro sunt! Debitis in beatae vero suscipit unde adipisci 
  magni animi harum vel. Obcaecati, odio? Vero iste obcaecati assumenda 
  iusto consequuntur eius voluptas. Quod iste pariatur quo facilis consequuntur,
   mollitia quaerat non minus magnam, nisi quae inventore quidem.`,
  `Iure a rem officia totam accusamus quis repellat cumque
 hic eligendi blanditiis ea perspiciatis asperiores quidem soluta tempore
  suscipit, porro sunt! Debitis in beatae vero suscipit unde adipisci 
  magni animi harum vel. Obcaecati, odio? Vero iste obcaecati assumenda 
  iusto consequuntur eius voluptas. Quod iste pariatur quo facilis consequuntur,
   mollitia quaerat non minus magnam, nisi quae inventore quidem.`,
  `Iure a rem officia totam accusamus quis repellat cumque
 hic eligendi blanditiis ea perspiciatis asperiores quidem soluta tempore
  suscipit, porro sunt! Debitis in beatae vero suscipit unde adipisci 
  magni animi harum vel. Obcaecati, odio? Vero iste obcaecati assumenda 
  iusto consequuntur eius voluptas. Quod iste pariatur quo facilis consequuntur,
   mollitia quaerat non minus magnam, nisi quae inventore quidem.`,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Totam consectetur veritatis magnam vero odit maxime dicta 
consequatur numquam error omnis voluptatum, mollitia doloremque 
inventore. Vitae distinctio temporibus maxime perspiciatis nisi!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
 praesentium! `,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Totam consectetur veritatis magnam vero odit maxime dicta 
consequatur numquam error omnis voluptatum, mollitia doloremque 
inventore. Vitae distinctio temporibus maxime perspiciatis nisi!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
 praesentium! `,
  `Iure a rem officia totam accusamus quis repellat cumque
 hic eligendi blanditiis ea perspiciatis asperiores quidem soluta tempore
  suscipit, porro sunt! Debitis in beatae vero suscipit unde adipisci 
  magni animi harum vel. Obcaecati, odio? Vero iste obcaecati assumenda 
  iusto consequuntur eius voluptas. Quod iste pariatur quo facilis consequuntur,
   mollitia quaerat non minus magnam, nisi quae inventore quidem.`,
];

const loremForm = document.querySelector(".lorem-form");
const input = document.querySelector("#amount");
const result = document.querySelector(".lorem-text");

loremForm.addEventListener("click", (e)=> {
  const value = input.value
  const random = Math.floor(Math.random() * para.length);

  if (isNaN(value) || value <= 0 || value > para.length) {
    result.innerHTML = `<p>${para[random]}<p>`;
  } else {
    let newpara = para.slice(0, value);

    let x = newpara
      .map((item)=> {
        return (result.innerHTML = `<p>${item}</p>`);
      })
      .join("");

    result.innerHTML = x;
  }

  console.log(random);
});
