TEMPLATE_PATH = './pages/template.html'
INDEX_PATH = './pages/index.html'
BLOG_PATH = './pages/blog.html'

def generate_page(page_path):
    with open(TEMPLATE_PATH,"r") as f:
        template_page = f.read()

    with open(page_path,"r") as f:
        index_page = f.read()

    output_path = page_path.replace('pages', 'docs')
    with open(output_path,"w") as f:
        content = template_page.replace('{{page}}', index_page)
        f.write(content)

    print("Generated page at ", output_path)

generate_page(INDEX_PATH)
generate_page(BLOG_PATH)

print("Done.")
