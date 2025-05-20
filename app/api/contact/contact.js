export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();{
        const { name, email, message, phone, subject } = req.body;

        try {
            
        } catch (error) {
            
        }
    }
}