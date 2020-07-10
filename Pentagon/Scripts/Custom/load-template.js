function load_blogs() {
    $("#pages-placeholder").load("../../Pages/Site/blogs.html");
}
function load_home() {
    $("#pages-placeholder").load("../../Pages/Site/home.html");
    $('.menu-link-for-collapse').click(function () {
        $('.menu-link-for-collapse').removeClass('active');
        $(this).addClass('active');
        $('.navbar-collapse').collapse('hide');
    })
}
function load_contact() {
    $("#pages-placeholder").load("../../Pages/Site/contact.html");
}
function load_feedback() {
    $("#pages-placeholder").load("../../Pages/Site/feedback.html");
}
function load_experience() {
    $("#pages-placeholder").load("../../Pages/Site/experience.html");
}
function load_projects() {
    $("#pages-placeholder").load("../../Pages/Site/projects.html");
}