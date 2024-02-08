import unittest
from name_processor import process_name

class TestNameProcessor(unittest.TestCase):
    def test_process_name(self):
        self.assertEqual(process_name("JohnDoe"), "eoDnhoJ")
        self.assertEqual(process_name("12345"), "54321")

    def test_process_name_with_non_alphanumeric(self):
        with self.assertRaises(ValueError):
            process_name("John Doe!")  # contains space and exclamation mark

if __name__ == "__main__":
    unittest.main()