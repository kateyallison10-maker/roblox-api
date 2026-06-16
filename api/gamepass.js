export default async function handler(req, res) {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({ error: "Missing ID" });
  }

  try {
    const response = await fetch(
      `https://economy.roblox.com/v2/game-passes/${id}/product-info`
    );

    const data = await response.json();

    return res.status(200).json({
      name: data.Name,
      price: data.PriceInRobux,
      creator: data.Creator?.Name || "Unknown"
    });

  } catch (err) {
    return res.status(500).json({ error: "Failed" });
  }
}
