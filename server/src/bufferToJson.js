export function bufferToJson(req, res, next) {
    if (Buffer.isBuffer(req.body)) {
      const bufferString = req.body.toString('utf-8');
      try {
        req.body = JSON.parse(bufferString);
      } catch (error) {
        return res.status(400).json({ message: "Invalid JSON body" });
      }
    }
    next();
  }
  