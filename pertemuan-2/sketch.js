function setup() {
  createCanvas(640, 480); // Membuat canvas dengan ukuran 640x840
  background(140, 150, 100); 
}

function draw() {
  fill(280, 280, 140); // memberikan warna kuning pada segitiga
  noStroke(); // menghilangkan border pada segitiga
  triangle(width/2, height/2+50, width/2-50, height/2-25, width/2+50,
  height/2-25); // menggambar segitiga terbalik
}