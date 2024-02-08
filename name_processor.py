def process_name(name):
    if not name.isalnum():
        raise ValueError("Name contains non-alphanumeric characters")
    return name[::-1]