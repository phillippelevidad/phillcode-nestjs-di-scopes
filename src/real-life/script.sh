for i in {1..5}; do curl http://localhost:3000/real-life/singleton & done

for i in {1..5}; do curl http://localhost:3000/real-life/request & done

for i in {1..5}; do curl http://localhost:3000/real-life/transient & done

