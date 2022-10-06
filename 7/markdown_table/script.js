// TODO :
const markdown = document.querySelector("#markdown");
const table = document.querySelector("#table");
const btn = document.querySelector("#convert");
let arr;
btn.addEventListener("click", (e) => {
	arr = markdown.value.trim().split("\n");
	arr.splice(1, 1);
	// console.log(arr);
	generateTable();
});

function generateTable() {
	const s = searchCounter(arr[0], "|");
	// console.log(s);
	table.innerHTML = "";
	let result = [];
	if (s === 1) {
		arr.forEach((data) => {
			result.push([data.slice(1, -1).trim()]);
		});
		// console.log(result);
		table.innerHTML = `<table>
		<tbody>
				<tr>
						<th>${result[0]}</th>
				</tr>
				${result.slice(1).map((data) => {
					return `
					<tr>
						<td>${data}</td>
					</tr>`;
				})}
				
		</tbody>
	</table>
`;
		table.removeChild(table.childNodes[0]);
	} else if (s > 1) {
		arr.forEach((data) => {
			const t = data.slice(1, -1).split("|");
			result.push(t);
		});
		// console.log(result);
		table.innerHTML = `<table>
		<tbody>
				<tr>
						${result[0].map((data) => {
							return `<th>${data.trim()}</th>`;
						})}
				</tr>
				${result.slice(1).map((data) => {
					return `
					<tr>
						${data.map((d) => {
							// console.log(d);
							return `<td>${d.trim()}</td>`;
						})}
					</tr>`;
				})}
				
		</tbody>
	</table>
`;
		table.removeChild(table.childNodes[0]);
	}
}

function searchCounter(str, pattern) {
	let count = 0;
	[...str].forEach((ch) => {
		if (ch === pattern) {
			count++;
		}
	});
	return count - 1;
}
