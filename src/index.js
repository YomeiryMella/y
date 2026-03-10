import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const port = process.env.PORT || 3000;

console.log(`_dirname: ${_dirname}`);

const app = express();

app.use(express.static(path.join(_dirname, "../public")));
app.set("views", path.join(_dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) =>  {
    res.render("index")
});   

app.get("/about", (req, res) =>  {
    res.render("about")
});   

app.get("/contact", (req, res) =>  {
    res.render("contact")
});   


app.get("/job-list", (req, res) =>  {
    res.render("job-list")
});   

app.get("/testimonial", (req, res) =>  {
    res.render("testimonials")
});   

app.get("/category", (req, res) =>  {
    res.render("category")
});   

app.get("/404", (req, res) =>  {
    res.render("404")
});   

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})