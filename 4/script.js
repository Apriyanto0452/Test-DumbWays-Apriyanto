let data = [
    "Rekayasa Perangkat Lunak",
    "Teknik Penyempurnaan Tekstil",
    "Teknologi Pengolahan Hasil Pertanian",
    "Teknik Konstruksi Batu dan Beton"
]

function tampil() {
    let tabel = document.getElementById('table');
    tabel.innerHTML = "<tr><th>No</th><th>Data</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        let btnEdit = "<button class='btn-edit' onclick='edit("+i+")' type='button'>Edit</button>";
        let btnHapus = "<button class='btn-hapus' onclick='hapus("+i+")' type='button'>hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>"+j+"</td><td>"+data[i]+"</td><td>"+btnEdit+" "+btnHapus+"</td></tr>";
    }
}

function tambah() {
    let input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
    input.value = "";
}

function edit(id) {
    let baru= prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();