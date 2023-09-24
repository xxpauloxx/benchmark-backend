from sanic import Sanic
from sanic.response import text

app = Sanic("BenchmarkHelloWorldApp")

@app.get("/")
async def hello_world(_):
    return text("Hello, world from Sanic!")
