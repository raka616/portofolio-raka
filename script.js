
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================
// TECHNICAL SKILLS DATA
// =========================

const skillData = {

    html: {
        title: "HTML",
        description:
            "HTML (HyperText Markup Language) digunakan untuk membuat struktur dan susunan konten website. Contohnya seperti heading, paragraf, gambar, tombol, formulir, dan berbagai elemen lainnya."
    },

    css: {
        title: "CSS",
        description:
            "CSS (Cascading Style Sheets) digunakan untuk mengatur tampilan website. Dengan CSS, kita dapat mengatur warna, ukuran teks, jarak, layout, animasi, serta membuat tampilan website responsif."
    },

    javascript: {
        title: "JavaScript",
        description:
            "JavaScript merupakan bahasa pemrograman yang digunakan untuk membuat website lebih interaktif. Contohnya seperti tombol yang merespons klik, navigasi, validasi formulir, dan perubahan konten."
    },

    php: {
        title: "PHP",
        description:
            "PHP merupakan bahasa pemrograman yang berjalan di sisi server. PHP dapat digunakan untuk mengolah data, mengatur autentikasi pengguna, menjalankan logika aplikasi, dan berinteraksi dengan database."
    },

    laravel: {
        title: "Laravel",
        description:
            "Laravel adalah framework PHP yang membantu proses pengembangan aplikasi web. Laravel menyediakan berbagai fitur seperti routing, controller, model, migration, dan sistem autentikasi."
    },

    mysql: {
        title: "MySQL",
        description:
            "MySQL adalah sistem manajemen database relasional. Teknologi ini digunakan untuk menyimpan, mengelola, dan mengambil data menggunakan bahasa SQL."
    }

};


// =========================
// MY INTERESTS DATA
// =========================

const interestData = {

    web: {
        title: "Web Development",
        description:
            "Saya tertarik mempelajari proses pembuatan website, mulai dari menyusun struktur menggunakan HTML, mengatur tampilan dengan CSS, hingga menambahkan interaksi menggunakan JavaScript dan teknologi lainnya."
    },

    technology: {
        title: "Technology",
        description:
            "Saya memiliki ketertarikan terhadap perkembangan teknologi dan dunia informasi. Saya senang mencari tahu bagaimana teknologi bekerja serta mempelajari hal-hal baru yang dapat menambah wawasan."
    },

    workout: {
        title: "Workout",
        description:
            "Saya menyukai aktivitas olahraga dan latihan fisik. Bagi saya, workout merupakan salah satu cara untuk membangun kebiasaan disiplin, konsistensi, dan menjaga kebugaran tubuh."
    },

    taekwondo: {
        title: "Taekwondo",
        description:
            "Taekwondo merupakan salah satu bidang olahraga bela diri yang saya minati. Selain melatih kemampuan fisik, saya juga tertarik pada nilai disiplin, fokus, dan pengendalian diri dalam latihan."
    }

};


// =========================
// INTERACTIVE DETAIL SYSTEM
// =========================

/**
 * @param {string} groupName
 * @param {Record<string, {title: string, description: string}>} data
 */

function setupInteractiveCards(groupName, data) {

    const buttons = document.querySelectorAll(
        `[data-group="${groupName}"]`
    );

    const panel = document.getElementById(
        `${groupName}Detail`
    );

    const title = document.getElementById(
        `${groupName}Title`
    );

    const description = document.getElementById(
        `${groupName}Description`
    );

    const closeButton = document.querySelector(
        `[data-close="${groupName}"]`
    );

    if (!panel || !title || !description) return;

    // KLIK KARTU
    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const key = button.dataset.key;
            const selectedItem = data[key];

            if (!selectedItem) return;

            // Tampilkan informasi
            title.textContent = selectedItem.title;

            description.textContent =
                selectedItem.description;

            panel.hidden = false;

            // Tandai kartu yang dipilih
            buttons.forEach((item) => {

                const isActive = item === button;

                item.classList.toggle(
                    "active",
                    isActive
                );

                item.setAttribute(
                    "aria-expanded",
                    String(isActive)
                );

            });

            // Arahkan layar ke penjelasan
            panel.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        });

    });


    // TOMBOL TUTUP
    if (closeButton) {

        closeButton.addEventListener("click", () => {

            panel.hidden = true;

            buttons.forEach((button) => {

                button.classList.remove("active");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

}


// =========================
// AKTIFKAN INTERAKSI
// =========================

setupInteractiveCards("skills", skillData);

setupInteractiveCards("interests", interestData);


// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================
// CONSOLE MESSAGE
// =========================

console.log("Portfolio Raka berhasil dimuat!");
