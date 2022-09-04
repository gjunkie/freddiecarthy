export default function test(req, res) {
  console.log(req.headers)
  res.status(200).json({ name: 'John Doe' }); 
}
